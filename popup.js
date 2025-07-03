// Popup script for Beautiful Green Theme Extension

document.addEventListener('DOMContentLoaded', function() {
    const enableThemeSwitch = document.getElementById('enableTheme');
    const enableAnimationsSwitch = document.getElementById('enableAnimations');
    
    // Load saved settings
    chrome.storage.sync.get(['themeEnabled', 'animationsEnabled'], function(result) {
        enableThemeSwitch.checked = result.themeEnabled !== false;
        enableAnimationsSwitch.checked = result.animationsEnabled !== false;
    });
    
    // Handle theme toggle
    enableThemeSwitch.addEventListener('change', function() {
        const isEnabled = this.checked;
        chrome.storage.sync.set({ themeEnabled: isEnabled });
        
        // Send message to content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'toggleTheme',
                enabled: isEnabled
            });
        });
    });
    
    // Handle animations toggle
    enableAnimationsSwitch.addEventListener('change', function() {
        const isEnabled = this.checked;
        chrome.storage.sync.set({ animationsEnabled: isEnabled });
        
        // Send message to content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'toggleAnimations',
                enabled: isEnabled
            });
        });
    });
});

// Handle Firefox compatibility
if (typeof browser !== 'undefined' && !chrome.runtime) {
    // Firefox specific code
    const chrome = browser;
} 