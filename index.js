const events = [
    { name: 'The king of Irish Pub', event: 'Muzika uživo', date: '12.05.2023', location: 'Trg Republike Srbije 1', image: "irishpub.jpg" },
    { name: 'Just pub', event: 'Muzika uživo', date: '12.05.2023', location: 'Spasovdanska 13a', image: "justpub.jpg" },
    { name: 'Majstor za pivo', event: 'Muzika uživo', date: '13.05.2023', location: 'Spasovdanska 31G', image: "majstorzapivo.jpg" },
    { name: 'New Folder', event: 'Muzika uživo', date: '19.05.2023', location: 'Nikole Tesle 23', image: "newfolder.jpg" },
    { name: 'Nomad', event: 'Muzika uživo', date: '19.05.2023', location: 'Trg Republike Srbije 3', image: "nomad.jpg" },
    { name: 'Czech In Pub', event: 'Muzika uživo', date: '20.05.2023', location: 'Nikole Tesle 55', image: "chezhin.jpg" },
];
console.log(events);



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
