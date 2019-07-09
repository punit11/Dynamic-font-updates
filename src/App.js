import React from "react";
import MyTemplate from "./template";
import "./template.css";
import "./App.css";


// 1. Create a classs based component and save initial state for fonts data

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // sansFamily: "Arial",
      // monoFamily: "Courier New",
      // serifFamily: "Times New Roman",
      fontsData: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // 2. Fetch data from Google Fonts API inside componentDidMount() lifecycle method and setState

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCtURrjJTBbaDuwQlkUMbskHxkByn1GBCE"
    )
      .then(response => response.json())
      .then(data => this.setState({ fontsData: data.items }));
  }

  // 3. Click handler for button

  handleClick() {

    //  3.1 Filter the returned data and store results for sans, serif and mono font 
    //  categories in seperate variables
    let sans_font = this.state.fontsData.filter(o => o.category === "sans-serif");
    let mono_font = this.state.fontsData.filter(o => o.category === "monospace");
    let sans_serif_font = this.state.fontsData.filter(o => o.category === "serif");

    //  3.2 After filtering, pick any random font to apply from each of the 3 categories
    let rand_sans_font = sans_font[Math.floor(Math.random() * sans_font.length)];
    let rand_mono_font = mono_font[Math.floor(Math.random() * mono_font.length)];
    let rand_sans_serif_font = sans_serif_font[Math.floor(Math.random() * sans_serif_font.length)];
    
  // 4. Construct style markup using the randomised fonts. 
  // They key here is to pass the correct file path to pull correct font.

    let markup = [
      '@font-face {\n',
      '\tfont-family: \'Sans\';\n',
      '\tsrc: url(\'', rand_sans_font.files.regular, '\');\n',
      '}\n',
      '@font-face {\n',
      '\tfont-family: \'Mono\';\n',
      '\tsrc: url(\'', rand_mono_font.files.regular, '\');\n',
      '}\n',
      '@font-face {\n',
      '\tfont-family: \'Serif\';\n',
      '\tsrc: url(\'', rand_sans_serif_font.files.regular, '\');\n',
      '}\n'
    ].join('');

    // 5. If the old/unused style tag is present, remove it first, to prevent DOM cluttering

    var x = document.getElementById("root").querySelector("style");
    if(x) {
      x.parentNode.removeChild(x);
    }

    // 6. Inject latest style data/markup inside root id 

    let style =  document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = markup;
    let list = document.getElementById("root");
    list.insertBefore(style, list.childNodes[0]);

    // 7. The following is another approach, this can be done using Webfontloader library

    // WebFont.load({
    //   // google: {
    //   //   families: [
    //   //     rand_sans_font.family,
    //   //     rand_mono_font.family,
    //   //     rand_sans_serif_font.family
    //   //   ]
    //   // },
    //   custom: {
    //     families: [
    //           'Sans',
    //           'Mono',
    //           'Serif'
    //         ],
    //         urls: [
    //           `https://fonts.googleapis.com/css?family=${rand_sans_font.family}|${rand_mono_font.family}|${rand_sans_serif_font.family}&display=swap`,
    //         ]
    //   },
    //   classes: false,
    //   fontactive: function(familyName, fvd) {
    //     console.log('familyName, fvd ',familyName,' - ',fvd);
    //   },
    // });
    
    // this.setState({
    //   sansFamily: rand_sans_font.family,
    //   monoFamily: rand_mono_font.family,
    //   serifFamily: rand_sans_serif_font.family
    // });
    // console.log("This works", rand_sans_font.family);
  }

  // 8. Finally render UI
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Mess up fonts</button>
        <MyTemplate />
      </div>
    );
  }
}

export default App;
