// Button toggles for Student/Admin
        const studentBtn = document.getElementById('studentBtn');
        const adminBtn = document.getElementById('adminBtn');
        studentBtn.addEventListener('click', () => {
            studentBtn.classList.add('bg-primary', 'text-white');
            studentBtn.classList.remove('bg-gray-100', 'text-gray-600');
            adminBtn.classList.remove('bg-primary', 'text-white');
            adminBtn.classList.add('bg-gray-100', 'text-gray-600');
        });
        adminBtn.addEventListener('click', () => {
            adminBtn.classList.add('bg-primary', 'text-white');
            adminBtn.classList.remove('bg-gray-100', 'text-gray-600');
            studentBtn.classList.remove('bg-primary', 'text-white');
            studentBtn.classList.add('bg-gray-100', 'text-gray-600');
        });

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const isAdmin = adminBtn.classList.contains('bg-primary');
            window.location.href = isAdmin ? '/admin-dashboard' : '/student-dashboard';
        });

        // Signup modal logic
        const signupLink = document.getElementById('signupLink');
        const signupModal = document.getElementById('signupModal');
        const closeSignup = document.getElementById('closeSignup');
        const backToLogin = document.getElementById('backToLogin');

        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        closeSignup.addEventListener('click', () => {
            signupModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        signupModal.addEventListener('click', (e) => {
            if (e.target === signupModal) {
                signupModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        backToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Signup form submission
        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const password = form.querySelector('input[type="password"]').value;
            const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            alert('Account created successfully! Redirecting...');
            signupModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            window.location.href = '/student-dashboard';
        });
    
