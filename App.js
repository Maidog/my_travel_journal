import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card key={item.id} item={item} />
        )
    })
    
    return (
        <div>
            <Header />
            <section>
                {cards}
            </section>
        </div>
    )
}