const events = JSON.parse(localStorage.getItem('events')) || [];


console.log(allEvents);

function addEvent(name, event, date, location) {
    events.push({ name, event, date, location });
}

const eventTemplate = `
<img class="pictures">
<div class="txt">
    <a href="https://www.instagram.com/the_king_of_irish_pub/">
        <h3 class="name">The king of Irish Pub</h3>
    </a>
    <p>
        <div class="event"></div>
        <div class="date"></div>
        <div class="location"></div>
    </p>
</div>
`;

function allEvents() {
    for (let event of events) {
        const container = document.createElement('div');
        container.className = 'card';
        container.innerHTML = eventTemplate;

        container.getElementsByClassName('pictures')[0].src = event.image;
        container.getElementsByClassName('location')[0].textContent = event.location;
        container.getElementsByClassName('name')[0].textContent = event.name;
        container.getElementsByClassName('date')[0].textContent = event.date;
        container.getElementsByClassName('event')[0].textContent = event.event;
        document.getElementsByClassName('glavni-kontejner')[0].append(container);
    }
}

allEvents();
