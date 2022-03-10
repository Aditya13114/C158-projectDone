AFRAME.registerComponent("comics", {
  init:function(){
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards:function(){
    const thumbnailsRef = [
      {
        id: "comic-1",
        title: "Captain America Collection",
        url: "./assets/ek.jpeg"
      },

      {
        id: "comic-2",
        title: "Spider Man Collection",
        url: "./assets/do.jpeg"
      },

      {
        id: "comic-3",
        title: "Iron Man Collection",
        url: "./assets/teen.jpeg"
      },

      {
        id: "comic-4",
        title: "Thor Collection",
        url: "./assets/chaar.jpeg"
      }
    ];

    let previousXPosition = -60

    for(var item of thumbnailsRef){
      const posX = previousXPosition+25;
      const posY = 5;
      const posZ = -40;
      const position = {x:posX, y:posY, z:posZ};
      previousXPosition = posX

      //Making the border for thumbnails
      const borderEl = this.createBorder(position, item.id)
      
      //Adding the thumbnail element
      const thumbnail = this.createPoster(item);
      borderEl.appendChild(thumbnail);

    this.placesContainer.appendChild(borderEl);
    }

  },

  createBorder:function(position,id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry", {
    primitive: "plane",
    width: 22,
    height: 35
  });

  entityEl.setAttribute("position", position);
  entityEl.setAttribute("material", { color: "#fff" });
  entityEl.setAttribute("cursor-listener", {});
  return entityEl;
},
createPoster: function(item) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("visible", true);
  entityEl.setAttribute("geometry", {
    primitive: "plane",
    width: 20,
    height: 28
  });

  entityEl.setAttribute("position", { x: 0, y: 1, z: 0.1 });
  entityEl.setAttribute("material", { src: item.url });

  return entityEl;
}
});