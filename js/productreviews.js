const reviewContent = {
    "names": {
        "reviewer-1": "Dr. Gregory House",
        "reviewer-2": "Holden Caufield",
        "reviewer-3": "Kenny Powers",
        "reviewer-4": "Samuel J. Hyde",
        "reviewer-5": "Elon Musk",
        "reviewer-6": "Dennis Reynolds"

    }, 
    "reviews": {
        "ghReview": "It's a basic truth of the human condition that everybody lies. The only variable is about what. By the way, this is an amazing App! I use it all the time.",
        "hcReview": "People never notice anything... Except this. People will definitely notice this!",
        "kpReview": "Listen here you beautiful b****, I'm about to f*** you up with some truth... Sign up for this App! It will change your life!",
        "sjhReview": "This is a brilliant App! Good job!",
        "emReview": "This team came with an awesome App. Very useful!",
        "drReview": "Great App! How do I get involve with this? I can contribute plenty of things. I am a golden god!"
    }
}

/* Reviewers */

const reviewer1 = document.querySelectorAll('h4')[2];
reviewer1.textContent = reviewContent["names"]["reviewer-1"];

const reviewer2 = document.querySelectorAll('h4')[3];
reviewer2.textContent = reviewContent["names"]["reviewer-2"];

const reviewer3 = document.querySelectorAll('h4')[4];
reviewer3.textContent = reviewContent["names"]["reviewer-3"];

const reviewer4 = document.querySelectorAll('h4')[5];
reviewer4.textContent = reviewContent["names"]["reviewer-4"];

const reviewer5 = document.querySelectorAll('h4')[6];
reviewer5.textContent = reviewContent["names"]["reviewer-5"];

const reviewer6 = document.querySelectorAll('h4')[7];
reviewer6.textContent = reviewContent["names"]["reviewer-6"];

/* Reviews */

const review1 = document.querySelectorAll('p')[1];
review1.textContent = reviewContent["reviews"]["ghReview"];

const review2 = document.querySelectorAll('p')[2];
review2.textContent = reviewContent["reviews"]["hcReview"];

const review3 = document.querySelectorAll('p')[3];
review3.textContent = reviewContent["reviews"]["kpReview"];

const review4 = document.querySelectorAll('p')[4];
review4.textContent = reviewContent["reviews"]["sjhReview"];

const review5 = document.querySelectorAll('p')[5];
review5.textContent = reviewContent["reviews"]["emReview"];

const review6 = document.querySelectorAll('p')[6];
review6.textContent = reviewContent["reviews"]["drReview"];