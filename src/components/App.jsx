import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="application">
        
          {notes.map((note) => (
            <div>
              <div>
                <Note
                  key={note.id}
                  title={note.title}
                  content={note.content}
                />
              </div>
            </div>)
          )}
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default App;