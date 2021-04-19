
const slide2 = `
    <style>
    .content {
        padding: 0 16px;
        margin: 82px auto 32px;
        max-width: 960px;
        flex-direction: column;
        align-items: center;
        /*display: flex;*/
    }
    h1.titleS2 {
        color: #106839;
        font-size: 60px;
        line-height: 1.1;
    }
    h2.subtitleS2 {
        font-size: 40px;
        line-height: 1.1;
        font-weight: normal;
    }
    div.threeMenu {
        display: flex;
        background-color: #f5f5f5;
    }
    h3.fusce {
        color: #27a549;
        border-bottom: 10px solid #27a549;
    }
    h3.nulla {
        color: #106839;
        border-bottom: 10px solid #106839;
    }
    h3.pellentesque {
        color: #8ec544;
        border-bottom: 10px solid #8ec544;
    }
    div.fMenu {
        padding: 3%;
    }
    div.sMenu {
        padding: 3%;
    }
    div.tMenu {
        padding: 3%;
    }

    div.buttonDonecandNulla {
        display: flex;
    }
    button.Donec {
        color: white;
        background-color: #38b046;
        font-size: 20px;
        display: flex;
        border: 0;
        padding-top: 1%;
        padding-bottom: 1%;
        padding-right: 2%;
        padding-left: 2%;
        margin-right: 5%;
    }
    button.Nulla {
        font-style: italic;
        color: white;
        background-color: #38b046;
        font-size: 20px;
        display: flex;
        border: 0;
        padding-top: 1%;
        padding-bottom: 1%;
        padding-right: 2%;
        padding-left: 2%;
    }
    span.number {
        color: #38b046;
    }
    p.footer {
        font-size: 10px;
    }
    </style>

    <div class="content">

        <h1 class="titleS2">Duis vestibulum, nec dapibus ligula</h1>
        <h2 class="subtitleS2">In dapibus dui ac erat lobortis.</h2>
        <p>Nulla quis velit molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.</p>
        
        <div class="threeMenu">
            <div class="fMenu">
            <h3 class="fusce">Fusce a arcu</h3>
            <p>Feugiat odio et, varius enim. 
            Sed eleifend ex et auctor lacinia. 
            Fusce in efficitur lorem. Donec 
            blandit urna et dolor ultrices 
            pellentesque. </p>

            </div>
            <div class="sMenu">
            <h3 class="nulla">Nulla quis velit</h3>
            <p>Molestie, congue leo ac, 
            bibendum dui. Pellentesque 
            ut sem vel metus ornare 
            aliquam vel ut neque. </p>

            </div>
            <div class="tMenu">
            <h3 class="pellentesque">Pellentesque ut sem</h3>
            <p>Vel metus ornare aliquam vel 
            ut neque. Suspendisse ac 
            ipsum nec ipsum ultricies 
            porta. Praesent ut ornare 
            lacus.  Pellentesque non tortor 
            vel erat feugiat.</p>
            
            </div>
        </div>
        <p>Fusce in efficitur <span class="number">555-555-5555</span> Curabitur viverra, molestie tincidunt.</p>

        <div class="buttonDonecandNulla">
                <button class="Donec"> Donec velita <span class="material-icons">arrow_right</span> </button>
            
                <button class="Nulla"> Nulla quis velit molestie <span class="material-icons">arrow_right</span> </button>
        </div>

        <p class="footer">Duis vestibulum ultricies leo, nec dapibus ligula luctus ut. In dapibus dui ac erat lobortis pulvinar. Fusce a arcu tempor, feugiat odio et, varius enim. Nulla quis velit 
        molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut 
        ornare lacus. Pellentesque non tortor vel erat feugiat elementum.</p>

    </div>
`;

export default slide2;
