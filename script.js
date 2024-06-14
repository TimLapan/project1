document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    let dob = document.getElementById('dob').value;
    let resultDiv = document.getElementById('result');
    let form = document.getElementById('birthdayForm');

    if (dob) {
        let today = new Date();
        let birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 ) {
            age--;
        }
        
        // Объединяем весь текст в один innerHTML
        resultDiv.innerHTML = `<p>С ДНЕМ РОЖДЕНИЯ!!!</p>
                               <p>Мама, я поздравляю тебя с ${age}-летием!!!
                               Я желаю тебе всего наилучшего, я тебя люблю!!!❤️❤️❤️</p>
                               <img src="cake.gif" alt="Birthday Cake" width="200" height="200">`;
        
        form.style.display = 'none'; // Скрыть форму после отправки
        startFireworks();
    } else {
        resultDiv.innerHTML = "<p>Пожалуйста, введите корректную дату рождения.</p>";
    }
});

function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function fireworks() {
        let particles = [];
        const colors = ['#ffdd55', '#ff6622', '#ff2255', '#8822ff', '#44ff88'];

        function initParticles(num, x, y) {
            for (let i = 0; i < num; i++) {
                particles.push({
                    x: x,
                    y: y,
                    radius: Math.random() * 2 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    velocity: {
                        x: (Math.random() - 0.5) * 3.5,
                        y: (Math.random() - 0.5) * 3.5
                    }
                });
            }
        }

        function animate() {
            if (Math.random() < 0.1) {
                initParticles(Math.random() * 100 + 50, Math.random() * canvas.width, Math.random() * canvas.height);
            }
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, i) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = particle.color;
                ctx.fill();
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.radius -= 0.02;
                if (particle.radius < 0.1) {
                    particles.splice(i, 1);
                }
            });
            requestAnimationFrame(animate);
        }

        animate();
    }

    fireworks();
}
