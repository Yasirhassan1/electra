import Header from "./Header"
import Card from "./Card"
import items from "./data"
import React from "react"

export default function Home(){
    let [search, setSearch] = React.useState(false)
    let [searchItemm, setSearchItemm] = React.useState("")
    let [selectedItem, setSelectedItem] = React.useState("all")
    let choose = "";

      if(search){
        choose = "search"
      }
      else{
        choose = selectedItem
      }
      
      

    return(
        
        <>
        <Header setSearch = {setSearch} setSearchItemm = {setSearchItemm} selectedItem = {selectedItem} setSelectedItem = {setSelectedItem}/>
  <main className="flex justify-center p-4 bg-[#e4e4e4] w-full max-w-[1530px] mx-auto">
    <div className="container grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center w-full gap-4 mt-[80px]">
    
    {choose == "all"?
         items.map((cur)=>{
          return  <Card key={cur.id} pic={cur.pic} title={cur.title.charAt(0).toUpperCase() + cur.title.slice(1)} id={cur.id} price={cur.price} description={cur.description} catagory = {cur.catagory}/>
      }):
      choose == "search"?
      items.map((cur)=>{      
        if(cur.title.includes(searchItemm) || cur.catagory == searchItemm){
                  return <Card key={cur.id} pic={cur.pic} title={cur.title.charAt(0).toUpperCase() + cur.title.slice(1)} id={cur.id} price={cur.price} description={cur.description} catagory = {cur.catagory}/>
         }
       
   }):
   items.map((cur)=>{
    if(selectedItem == cur.catagory){
      return <Card key={cur.id} pic={cur.pic} title={cur.title.charAt(0).toUpperCase() + cur.title.slice(1)} id={cur.id} price={cur.price} description={cur.description} catagory = {cur.catagory}/>
    }
   })
  }

    </div>
  </main>
</>

    )
}