class Food{

    constructor(){
        this.milkImage = loadImage("images/Milk.png")
        this.feedtime
    }


    buttons(){
        this.button1= createButton("feed the dog")
        this.button1.position(800,80)

        this.button2= createButton("add feed")
        this.button2.position(900,80)


        if(foodS>0){
        this.button1.mousePressed(()=>{

            foodS--
            writeStock(foodS)
            happy()
        })}

        this.button2.mousePressed(()=>{
            
            foodS++
            writeStock(foodS)
            normal()
        })

        
    }

    milkImg(){
        
        var newX=0
        for(var i=0; i< foodS; i++){
            image(this.milkImage, newX , 200, 50, 50)
            newX=newX+50
        }
    }
    getfeedtime(){
        database.ref('feedtime').on("value",(data)=>{
            this.feedtime= data.val()
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    garden(){
        background(gardenImg)
    }
    washRoom(){
        background(washroomImg)
    }
    bedRoom(){
        background(bedroomImg)
    }
}