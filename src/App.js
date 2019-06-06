import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJs from './backends/pdfjs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer
          backend={PDFJs}
          src='/public/deed.pdf'
        />
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//
//       <Tenant name="Tom" lease='true' rent='1000'/>
//
//
//     </div>
//   );
// }
//
// export default App;
