
//This is File allows to open and close Calendars only.

let MeetingbButtonOpenCalendar = document.querySelector('.dashboard__form__bottom__dateInput');
let MeetingCalendar            = document.querySelector('.MeetingCalendar');
let IconBtnOpenMeetingCalendar = document.querySelector('.MeetingIconOpenCalendar');

IconBtnOpenMeetingCalendar.addEventListener('click', () => {
    MeetingCalendar.classList.toggle('OPenMeetingCalendar');
    IconBtnOpenMeetingCalendar.classList.toggle('IconCalendarChangeBackground');
});






// These are the two variables that are displayed in the Mobile version of
// the Website, this allows that when they are displayed, it will open the 
//windows, (The Pops), and automatically this must close the menu when the 
///POPs are opened.

let Speed              = document.querySelector('.btnSpeed');
let MeetPop            = document.querySelector('.NewsFormMeet');
MeetPop.style.display  = 'none';
Speed.addEventListener('click', () => {
     document.querySelector('.NewsFormMeet').style.display = 'flex';
     document.querySelector('.sidebar').style.display = 'none';
});

let ButtonSidebarOpenMeetPop = document.getElementById('btnSidebarMeet');
let QuickPop                 = document.querySelector('.QuickMeet');
QuickPop.style.display       = 'none';

ButtonSidebarOpenMeetPop.addEventListener('click', () => {
     document.querySelector('.QuickMeet').style.display = 'flex';
     document.querySelector('.sidebar').style.display = 'none';
     console.log('Aieux Aieux');
});


// FOR RECORD.HTML 

// let SpeedRecord        = document.querySelector('.btnSpeedRecord');
// let MeetRecord         = document.querySelector('.NewsFormMeet');
// MeetRecord.style.display  = 'none';
// Speed.addEventListener('click', () => {
//      document.querySelector('.NewsFormMeet').style.display = 'flex';
//      document.querySelector('.sidebar').style.display = 'none';
// });

// let BtnPopRecordSidebaR      = document.getElementById('btnMeetRecord');
// let QuickPop                 = document.querySelector('.QuickMeet');
// QuickPop.style.display       = 'none';

// BtnPopRecordSidebaR.addEventListener('click', () => {
//      document.querySelector('.QuickMeet').style.display = 'flex';
//      document.querySelector('.sidebar').style.display = 'none';
//      console.log('Aieux Aieux');
// });
