document.addEventListener("DOMContentLoaded", function () {
    let mcuChronologicalOrderBtn = document.getElementById("mcu-chronological-order-btn");
    let dateOrderBtn = document.getElementById("date-order-btn");
    let excludeSeriesOption = document.getElementById("exclude-series-option");

    let container = document.getElementById('mcu-items-container');

    let mcuItemTemplate = document.getElementById("mcu-item-template");

    mcu_items.forEach(item => {
        let itemNode = document.importNode(mcuItemTemplate.content, true);

        itemNode.children[0].dataset.order = item.order_position;
        itemNode.children[0].dataset.date = item.date;
        itemNode.children[0].classList.add(item.type);

        itemNode.querySelector('.poster').src = './img/' + item.poster;
        itemNode.querySelector('.poster').alt = item.title;

        container.appendChild(itemNode);
    });

    let iso = null;

    imagesLoaded(container, () => {
        iso = new Isotope(container, {
            itemSelector: '.item',
            masonry: {
                gutter: 10
                
            },
            getSortData: {
                order: '[data-order] parseInt',
                date: '[data-date] Date.parse'
            }
        });
    });

    mcuChronologicalOrderBtn.onclick = () => {
        iso.arrange({
            sortBy: 'order'
        });
    };

    dateOrderBtn.onclick = () => {
        iso.arrange({
            sortBy: 'date'
        });
    };

    excludeSeriesOption.addEventListener('change', (elem) => {
        if (elem.target.checked) {
            iso.arrange({
                filter: '.movie'
            });
        } else {
            iso.arrange({
                filter: '*'
            });
        }
    });
});