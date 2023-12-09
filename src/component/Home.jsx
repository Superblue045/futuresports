// Function to check if a value is a string
//const valString = (val) => {
//    return (isNaN(val));
//}

// Function to check if a value is a number
const valNum = (val) => {
    return (!isNaN(val));
}

// Function to validate a date in the format DD/MM/YY
const valDate = (val) => {
    const arr = val.split("/");
    const isNumber = Boolean(Number(arr[0])) && Boolean(Number(arr[1])) && Boolean(Number(arr[2]));
    return isNumber;
}

// Function to validate a time in the format "X hour"
//const valTime = (val) => {
//   const val1 = Boolean(Number(val.split(" ")[0]));
//  const val2 = (val.split(" ")[1] === "hour");
// return (val1 && val2);
//}

// Function to validate a skill level (A or B)
const valSkill = (val) => {
    return ((val === "A") || (val === "B"))
}

// Function to display and collect input for court booking
const showCourtBookingForm =()=> {
    let date = "", time = "", players = "";
    let valid1 = false, valid2 = false, valid3 = false;
    while(!valid1) {
        date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        valid1 = (valDate(date));
    }
    while(!valid2) {
        time = prompt("Enter the length of time (e.g., 1 hour):");
        valid2 = (valNum(time));
    }
    while(!valid3) {
        players = prompt("Enter the number of players:");
        valid3 = (valNum(players));
    }

    if (date && time && players) {
        alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
    } else {
        alert("Invalid input or booking canceled.");
    }
}

// Function to display and collect input for coach booking
const showCoachBookingForm =()=> {
    let date = "", time = "", skill = "";
    let valid1 = false, valid2 = false, valid3 = false;

    while(!valid1) {
        date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        valid1 = (valDate(date));
    }
    while(!valid2) {
        time = prompt("Enter the length of time (e.g., 1 hour):");
        valid2 = (valNum(time));
    }
    while(!valid3) {
        skill = prompt("Indicate Skill Level (A) Advanced / (B) Beginner:");
        valid3 = (valSkill(skill));
    }

    if (date && time && skill) {
        alert(`Booking details:\nDate: ${date}\nTime: ${time}\nSkill Level: ${skill}`);
    } else {
        alert("Invalid input or booking canceled.");
    }
}

// Function to display and collect input for venue booking
const showVenueBookingForm=()=> {
    let date = "", time = "", players = "";
    let valid1 = false, valid2 = false, valid3 = false;

    while(!valid1) {
        date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        valid1 = (valDate(date));
    }
    while(!valid2) {
        time = prompt("Enter the length of time (e.g., 1 hour):");
        valid2 = (valNum(time));
    }
    while(!valid3) {
        players = prompt("Enter the number of guests:");
        valid3 = (valNum(players));
    }

    if (date && time && players) {
        alert(`Booking details:\nDate: ${date}\nTime: ${time}\nNumber of Guests: ${players}`);
    } else {
        alert("Invalid input or booking canceled.");
    }
}

// Function to display and collect input for equipment booking
const showEquipmentBookingForm =()=> {
    let date = "", time = "", rackets = "", balls = "";
    let valid1 = false, valid2 = false, valid3 = false, valid4 = false;

    while(!valid1) {
        date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        valid1 = (valDate(date));
    }
    while(!valid2) {
        time = prompt("Enter the length of time (e.g., 1 hour):");
        valid2 = (valNum(time));
    }
    while(!valid3) {
        rackets = prompt("Enter the number of rackets:");
        valid3 = (valNum(rackets));
    }
    while(!valid4) {
        balls = prompt("Enter the number of balls (4 balls / tin):");
        valid4 = (valNum(balls));
    }

    if (date && time && rackets && balls) {
        alert(`Booking details:\nDate: ${date}\nTime: ${time}\nNumber of Rackets: ${rackets}\nNumber of Balls: ${balls}`);
    } else {
        alert("Invalid input or booking canceled.");
    }
}

// React functional component for the Home section
const Home = (props) => {
    return (
        <section className="pt-24 px-5 flex color-gray small-column small-font-15" style={{flexDirection: "row", gap: 8}}>
            {/* Left column */}
            <div className="small-width-100 big-align-center" style={{width: "40%"}}>
                {props.name && <div>{props.name}</div>}
                Reminder: Club Memberships are due next week<br />
                Join us for a fun social gathering Sat 25th Nov<br />
                <img className="big-margin-auto" src="images/mainpage.jpg" alt="Tennis Activity" />
            </div>

            {/* Right column */}
            <div className="small-width-100 big-align-center" style={{width: "60%"}}>
                Bookings<br />
                Book a court, coaching session, or the venue.<br />
                
                {/* Booking options */}
                <div className="flex small-img big-content-center">
                    <img src="images/bookings-court.jpg" alt="Court Hire" onClick={showCourtBookingForm} />
                    <img src="images/bookings-coach.jpg" alt="Coach Bookings" onClick={showCoachBookingForm} />
                    <img src="images/bookings-venue.jpg" alt="Venue Bookings" onClick={showVenueBookingForm} />
                    <img src="images/bookings-equipment.jpg" alt="Equipment" onClick={showEquipmentBookingForm} />
                </div>
                <br />

                {/* Connect Zone */}
                Connect Zone<br />
                Connect with others with a similar interest, from night tennis to finding a hitting partner.<br />
                <img className="big-margin-auto" src="images/connectzone.jpg" alt="Connect Zone" />
            </div>
        </section>
    )
}

export default Home;
