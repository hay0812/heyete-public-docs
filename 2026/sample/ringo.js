(function() {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.style.backgroundColor = isDark ? '#121212' : '#ffffff';
 })();
