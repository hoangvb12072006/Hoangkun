document.addEventListener('DOMContentLoaded', () => {
    const snowflakeContainer = document.getElementById('snowflake-container');
    const numberOfSnowflakes = 50; // Số lượng bông tuyết

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflakeContainer.appendChild(snowflake);

        const size = Math.random() * 5 + 5; // Kích thước từ 5px đến 10px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Thời gian rơi từ 5s đến 10s
        snowflake.style.animationDelay = `-${Math.random() * 5}s`; // Tạo độ trễ ngẫu nhiên để tuyết rơi không đồng loạt
        snowflake.style.filter = `blur(${Math.random() * 1}px)`; // Tạo một chút mờ ảo
    }

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
});
