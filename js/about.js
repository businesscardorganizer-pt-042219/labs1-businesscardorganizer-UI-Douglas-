class LinkTab {
    constructor(elementTab) {
        this.elementTab = elementTab;
        this.tabData = this.elementTab.dataset.job;
        
        if(this.tabData === 'all') {
            this.cards = document.querySelectorAll('.card');
        } else {
            this.cards = document.querySelectorAll(`.card[data-job="${this.tabData}"]`);
        }

        this.cards = Array.from(this.cards).map(card => {
            return new CardTab(card);
        });

        this.elementTab.addEventListener('click', () => this.selectTab());
    }

    selectTab() {
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });

        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.style.display = "none";
        });

        this.elementTab.classList.add('active-tab');
        this.cards.forEach(card => card.selectCard());
    }
}

class CardTab {
    constructor(elementCard) {
        this.elementCard = elementCard;
    }

    selectCard() {
        this.elementCard.style.display = "flex";
    }
}

let tabs = document.querySelectorAll('.tab').forEach(tab => new LinkTab(tab));