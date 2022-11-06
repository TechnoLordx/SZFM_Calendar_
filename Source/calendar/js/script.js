'use strict';

//Public Globals
const days = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let c_date = new Date();
let day = c_date.getDay();
let month = c_date.getMonth();
let year = c_date.getFullYear();

(function App() {
    const calendar = `<div class="container">
            <div class="row">
                <div class="firstbox col-sm-5 col-12 d-flex">
                    <div class="card border-0 mt-5  flex-fill">
                        <div class="card-header py-3 d-flex justify-content-between">
                            <span class="prevMonth">&#10096;</span>
                            <span><strong id="s_m"></strong></span>
                            <span class="nextMonth">&#10097;</span>
                        </div>
                        <div class="card-body px-1 py-3">
                            <div class="table-responsive">
                                <table class="table table-sm table-borderless">
                                    <thead class="days text-center">
                                        <tr>
                                            ${Object.keys(days).map(key => (
                                                `<th><span>${days[key].substring(0,3)}</span></th>`
                                            )).join('')}                                            
                                        </tr>
                                    </thead>
                                    <tbody id="dates" class="dates text-center"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-12 d-flex pa-sm">
                    <div class="card border-0 mt-5 flex-fill d-none" id="event">
                        <div class="card-header py-3 text-center">
                            Add Event
                            <button type="button" class="close hide">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="card-body px-1 py-3">
                            <div class="text-center">
                                <span class="event-date">06 June 2020</span><br>
                                <span class="event-day">Monday</span>
                            </div> 
                            <div class="events-today my-3 px-3">
                               
                            </div> 
                            <div class="input-group events-input mb-3 col-10 mx-auto mt-2">
                                <input type="text" class="form-control" placeholder="Add Event" id="eventTxt">
                                <div class="input-group-append">
                                    <button class="btn btn-danger" type="button" id="createEvent">+</button>
                                </div>
                            </div>                        
                        </div>
                    </div>                            
                </div>
                <div class="col-sm-4 col-12 d-flex">
                    <div class="card border-0 mt-5 flex-fill id="weather">
                        <div class="card-header py-3 text-center">
                            Weather
                        </div>
                        <div class="card-body px-1 py-3">
                                            

                        

                        <div class="weathermain">
                        <div class="search">
                          <input type="text" class="search-bar" placeholder="Search">
                          <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
                              width="1.5em" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                              </path>
                            </svg></button>
                        </div>
                        <div class="weather loading">
                          <h2 class="city">Weather in Debrecen</h2>
                          <h1 class="temp">51°C</h1>
                          <div class="flex">
                            <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
                            <div class="description">Cloudy</div>
                          </div>
                          <div class="humidity">Humidity: 60%</div>
                          <div class="wind">Wind speed: 6.2 km/h</div>
                        </div>
                      </div>   




                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
            <div class="toast" style="position: absolute; top: 0; right: 15px;" data-delay="3000">
                <div class="toast-header">
                <strong class="mr-auto">Calendar</strong>
                <small>Just now</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="toast-body">
                </div>
            </div>
        </div>`;
    document.getElementById('app').innerHTML = calendar;   
})()

function renderCalendar(m, y) {
    //Month's first weekday
    let firstDay = new Date(y, m, 1).getDay();  
    //Days in Month
    let d_m = new Date(y, m+1, 0).getDate();
    //Days in Previous Month
    let d_pm = new Date(y, m, 0).getDate();
    
    let table = document.getElementById('dates');
    table.innerHTML = '';
    let s_m = document.getElementById('s_m');
    s_m.innerHTML = months[m] + ' ' + y;
    let date = 1;
    //remaing dates of last month
    let r_pm = (d_pm-firstDay) +1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {  
                let cell = document.createElement('td');
                let span = document.createElement('span');
                let cellText = document.createTextNode(r_pm);
                span.classList.add('ntMonth');
                span.classList.add('prevMonth');                  
                cell.appendChild(span).appendChild(cellText);
                row.appendChild(cell);
                r_pm++;
            }
            else if (date > d_m && j <7) {
                if (j!==0) {
                    let i = 0; 
                    for (let k = j; k < 7; k++) {
                         i++                                             
                        let cell = document.createElement('td');
                        let span = document.createElement('span');
                        let cellText = document.createTextNode(i);
                        span.classList.add('ntMonth');                    
                        span.classList.add('nextMonth');                    
                        cell.appendChild(span).appendChild(cellText);
                        row.appendChild(cell);          
                    };                  
                }                
               break;
            }
            else {
                let cell = document.createElement('td');
                let span = document.createElement('span');
                let cellText = document.createTextNode(date);
                span.classList.add('showEvent');
                if (date === c_date.getDate() && y === c_date.getFullYear() && m === c_date.getMonth()) {
                    span.classList.add('bg-danger');
                } 
                cell.appendChild(span).appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        table.appendChild(row);
    }
}
renderCalendar(month, year)

    $(function(){
        function showEvent(eventDate){
            let storedEvents = JSON.parse(localStorage.getItem('events'));
            if (storedEvents == null){
                $('.events-today').html('<h5 class="text-center">No events found</h5 class="text-center">');               
            }else{
                let eventsToday = storedEvents.filter(eventsToday => eventsToday.eventDate === eventDate);
                let eventsList = Object.keys(eventsToday).map(k => eventsToday[k]);
                if(eventsList.length>0){
                    let eventsLi ='';
                    eventsList.forEach(event =>  $('.events-today').html(eventsLi +=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    ${event.eventText}
                    <button type="button" class="close remove-event" data-event-id="${event.id}" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>`));
                }else{
                    $('.events-today').html('<h5 class="text-center">No events found</h5 class="text-center">');
                }               
            }
        }
        function removeEvent(id){
            let storedEvents = JSON.parse(localStorage.getItem('events'));
            if(storedEvents != null){
                storedEvents = storedEvents.filter( ev => ev.id != id ); 
                localStorage.setItem('events', JSON.stringify(storedEvents));
                $('.toast-body').html('Your event have been removed');
                $('.toast').toast('show');
            }
        }
        $(document).on('click', '.remove-event', function(){
            let eventId = $(this).data('event-id');
            removeEvent(eventId);
        })

        $(document).on('click', '.prevMonth', function(){
            year = (month === 0) ? year - 1 : year;
            month = (month === 0) ? 11 : month - 1;
            renderCalendar(month, year);
        })
        $(document).on('click', '.nextMonth', function(){
            year = (month === 11) ? year + 1 : year;
            month = (month + 1) % 12;
            renderCalendar(month, year);
        })
    
        $(document).on('click', '.showEvent', function(){
            $('.showEvent').removeClass('active');
            $('#event').removeClass('d-none');
            $(this).addClass('active');
            let todaysDate = $(this).text() +' '+ (months[month]) +' '+ year;
            let eventDay = days[new Date(year, month, $(this).text()).getDay()];
            let eventDate = $(this).text() + month + year;
            $('.event-date').html(todaysDate).data('eventdate', eventDate);
            $('.event-day').html(eventDay);
            showEvent(eventDate);
        })
        $(document).on('click', '.hide', function(){
            $('#event').addClass('d-none');
        })
        $(document).on('click', '#createEvent', function(){
            let events = localStorage.getItem('events');
            let obj = [];
            if (events) {
                obj = JSON.parse(events);
            }
            let eventDate = $('.event-date').data('eventdate');
            let eventText = $('#eventTxt').val();
            let valid = false;
            $('#eventTxt').removeClass('data-invalid');
            $('.error').remove();
            if (eventText == ''){
                $('.events-input').append(`<span class="error">Please enter event</span>`);
                $('#eventTxt').addClass('data-invalid');
                $('#eventTxt').trigger('focus');
            }else if(eventText.length < 3){
                $('#eventTxt').addClass('data-invalid');
                $('#eventTxt').trigger('focus');
                $('.events-input').append(`<span class="error">please enter at least three characters</span>`);
            }else{
                valid = true;
            }
            if (valid){
                let id =1;
                if (obj.length > 0) {
                    id = Math.max.apply('', obj.map(function (entry) { return parseFloat(entry.id); })) + 1;
                }
                else {
                    id = 1;
                }
                obj.push({
                    'id' : id,
                    'eventDate': eventDate,
                    'eventText': eventText
                });
                localStorage.setItem('events', JSON.stringify(obj));
                $('#eventTxt').val('');
                $('.toast-body').html('Your event have been added');
                $('.toast').toast('show');
                showEvent(eventDate);
            }
        })
    })
