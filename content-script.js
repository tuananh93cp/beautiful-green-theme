// Content Script for Beautiful Green Theme Extension

class BeautifulGreenTheme {
    constructor() {
        this.themeEnabled = true;
        this.animationsEnabled = true;
        this.init();
    }
    
    init() {
        // Load settings from storage
        this.loadSettings();
        
        // Listen for messages from popup
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === 'toggleTheme') {
                this.toggleTheme(request.enabled);
            } else if (request.action === 'toggleAnimations') {
                this.toggleAnimations(request.enabled);
            }
        });
        
        // Apply theme on page load
        this.applyTheme();
        
        // Watch for dynamic content changes
        this.setupMutationObserver();
    }
    
    loadSettings() {
        chrome.storage.sync.get(['themeEnabled', 'animationsEnabled'], (result) => {
            this.themeEnabled = result.themeEnabled !== false;
            this.animationsEnabled = result.animationsEnabled !== false;
            this.applyTheme();
        });
    }
    
    toggleTheme(enabled) {
        this.themeEnabled = enabled;
        this.applyTheme();
    }
    
    toggleAnimations(enabled) {
        this.animationsEnabled = enabled;
        this.applyAnimations();
    }
    
    applyTheme() {
        const body = document.body;
        
        if (this.themeEnabled) {
            body.classList.add('beautiful-green-theme');
            this.addCustomStyles();
        } else {
            body.classList.remove('beautiful-green-theme');
            this.removeCustomStyles();
        }
        
        this.applyAnimations();
    }
    
    applyAnimations() {
        const elements = document.querySelectorAll('button, .button, a, input');
        
        elements.forEach(element => {
            if (this.animationsEnabled && this.themeEnabled) {
                element.classList.add('green-theme-animate');
                element.classList.add('floating-element');
            } else {
                element.classList.remove('green-theme-animate');
                element.classList.remove('floating-element');
            }
        });
    }
    
    addCustomStyles() {
        if (document.getElementById('beautiful-green-theme-styles')) {
            return;
        }
        
        const style = document.createElement('style');
        style.id = 'beautiful-green-theme-styles';
        style.textContent = `
            /* Dynamic theme styles */
            .beautiful-green-theme {
                transition: all 0.3s ease !important;
            }
            
            .beautiful-green-theme * {
                transition: all 0.3s ease !important;
            }
            
            /* Enhanced focus styles */
            .beautiful-green-theme *:focus {
                outline: 2px solid #4caf50 !important;
                outline-offset: 2px !important;
            }
            
            /* Loading animations */
            @keyframes greenLoader {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .green-loading {
                background: linear-gradient(45deg, #66bb6a, #43a047, #66bb6a);
                background-size: 400% 400%;
                animation: greenLoader 2s ease infinite;
            }
        `;
        
        document.head.appendChild(style);
    }
    
    removeCustomStyles() {
        const style = document.getElementById('beautiful-green-theme-styles');
        if (style) {
            style.remove();
        }
    }
    
    setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Apply theme to newly added elements
                    if (this.themeEnabled) {
                        setTimeout(() => {
                            this.applyAnimations();
                        }, 100);
                    }
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Utility function to create floating particles
    createFloatingParticles() {
        if (!this.themeEnabled || !this.animationsEnabled) return;
        
        const particles = document.createElement('div');
        particles.id = 'green-theme-particles';
        particles.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #4caf50;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${3 + Math.random() * 4}s ease-in-out infinite;
                opacity: 0.6;
            `;
            particles.appendChild(particle);
        }
        
        document.body.appendChild(particles);
    }
}

// Initialize the theme when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BeautifulGreenTheme();
    });
} else {
    new BeautifulGreenTheme();
}

// Handle Firefox compatibility
if (typeof browser !== 'undefined' && !chrome.runtime) {
    const chrome = browser;
}