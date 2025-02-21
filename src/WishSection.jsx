import Header from "./Header";
import { UseWish } from "./UseWishList";
import Card from "./Card";
export default function WishSection(){
    const {wishList} = UseWish()
    return(
        <>
        <Header/>
        <div className={`cartContainer relative flex flex-col gap-4 p-4 pt-[100px]`}>
               {wishList.length == 0?
              <div className="flex flex-col items-center justify-center mt-16">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="w-32 h-32 opacity-70"
              />
              <strong className="text-lg text-gray-700 mt-4">
                Your Wish list is Empty
              </strong>
            </div>:
        
               <div className="container bg-[#e4e4e4] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center w-full gap-4">
               {
               wishList.map((cur, k)=> (
              <Card key={k} pic={cur.pic} title={cur.title} id = {cur.id} price={cur.price} description={cur.description} catagory={cur.catagory}/>
               )
            )}
               </div>
               }
               </div>
        
        </>
    )
}