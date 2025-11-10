const newsGrid = document.getElementById('news-grid');

    const newsItems = [
      {title: "Koenigsegg News", src: "/Project/Images/News-Trends/Koenigsegg.png"},
      {title: "Ford Mustang Mach-E", src: "/Project/Images/News-Trends/Ford Mustang.png"},
      {title: "Porsche Taycan", src: "/Project/Images/News-Trends/Porsche Taycan.png"},
      {title: "BMW iX", src: "/Project/Images/News-Trends/BMW iX.png"},
      {title: "Audi e-tron GT", src: "/Project/Images/News-Trends/Audi e-tron GT.png"},
      {title: "Mercedes EQS", src: "/Project/Images/News-Trends/Mercedes EQS.png"},
      {title: "Hyundai Ioniq 5", src: "/Project/Images/News-Trends/Hyundai Ioniq 5.png"},
      {title: "Rivian R1T", src: "/Project/Images/News-Trends/Rivian R1T.png"},
      {title: "Lucid Air", src: "/Project/Images/News-Trends/Lucid Air.png"},
      {title: "BMW X5 Launch", src: "/Project/Images/News-Trends/BMW X5.png"},
      {title: "Chevrolet Bolt EUV", src: "/Project/Images/News-Trends/Chevrolet Bolt EUV.png"},
      {title: "Kia EV6", src: "/Project/Images/News-Trends/Kia EV6.png"},
      {title: "Jaguar I-PACE", src: "/Project/Images/News-Trends/Jaguar I-PACE.png"},
      {title: "Toyota bZ4X", src: "/Project/Images/News-Trends/Toyota bZ4X.png"},
      {title: "Tesla Model S", src: "/Project/Images/News-Trends/Teala.png"},
      {title: "Autonomous Car Concept", src: "/Project/Images/News-Trends/Autonomos car.png"},
      {title: "Luxury EV Concept", src: "/Project/Images/News-Trends/Luxury EV.png"},
      {title: "Solar EV", src: "/Project/Images/News-Trends/Solar car.png"},
      {title: "BMW 3 Series Sedan", src: "/Project/Images/News-Trends/BMW 3 Series Sedan.png"},
      {title: "Mercedes AMG GT", src: "/Project/Images/News-Trends/Mercedes AMG GT.png"},
      {title: "Lamborghini Aventador", src: "/Project/Images/News-Trends/Lamborghini Aventador.png"},
      {title: "Ferrari SF90", src: "/Project/Images/News-Trends/Ferrari SF90.png"},
      {title: "Porsche 911 Turbo", src: "/Project/Images/News-Trends/Porsche 911 Turbo.png"},
      {title: "McLaren 720S", src: "/Project/Images/News-Trends/McLaren 720S.png"},
      {title: "Bugatti Chiron", src: "/Project/Images/News-Trends/Buggati Chiiron.png"},
      {title: "Aston Martin DB11", src: "/Project/Images/News-Trends/Aston Martin DB11.png"},
      {title: "Bentley Continental GT", src: "/Project/Images/News-Trends/Bentley Continental GT.png"},
      {title: "Rolls Royce Phantom", src: "/Project/Images/News-Trends/Rolls Royce Phantom.png"},
      {title: "Koenigsegg Jesko Absolute", src: "/Project/Images/News-Trends/Koenigsegg Jesko Absolute.png"},
      {title: "Pagani Huayra", src: "/Project/Images/News-Trends/Pagani Huayra.png"}
    ];

    function createCard(item) {
      const card = document.createElement('div');
      card.className = 'photos scroll-element';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;

      const title = document.createElement('h2');
      title.textContent = item.title;

      const downloadLink = document.createElement('a');
      downloadLink.href = item.src;
      downloadLink.download = '';
      downloadLink.innerHTML = '⬇️ Download';

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(downloadLink);

      return card;
    }

    newsItems.forEach(item => {
      const card = createCard(item);
      newsGrid.appendChild(card);
    });

    // Scroll animation
    const scrollElements = document.querySelectorAll(".scroll-element");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => observer.observe(el));