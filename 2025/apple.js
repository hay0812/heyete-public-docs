document.getElementById('hashCopy').addEventListener('click', function() {
        const hashText = this.innerText.replace('SHA256: ', '');
        navigator.clipboard.writeText(hashText).then(() => {
            const originalText = this.innerText;
            this.innerText = 'Copied!';
            setTimeout(() => { this.innerText = originalText; }, 1500);
        });
    });