class MonAn {
  constructor(ID, name, type, price, promote, pricePro, status) {
    this.ID = ID;
    this.name = name;
    this.type = type;
    this.price = price;
    this.promote = promote;
    this.pricePro = pricePro;
    this.status = status;
  }
  getPricePro() {
    return this.price - (this.price * this.promote) / 100;
  }
}

class FoodList {
  arrFood = [];
  addFood(monAn) {
    this.arrFood.push(monAn);
  }
}

const foodList = new FoodList();

//render
const renderFoodList = () => {
  let contentTbody = "";
  foodList.arrFood.forEach((monAn) => {
    contentTbody += `
    <tr>
      <td>${monAn.ID}</td>
      <td>${monAn.name}</td>
      <td>${monAn.type}</td>
      <td>${monAn.price}</td>
      <td>${monAn.promote}</td>
      <td>${monAn.getPricePro()}</td>
      <td>${monAn.status}</td>
    </tr>`;
  });
  document.getElementById("tbodyFood").innerHTML = contentTbody;
};

//xu ly nut them mon
document.getElementById("btnThemMon").addEventListener("click", function () {
  const ID = document.getElementById("foodID").value;
  const name = document.getElementById("tenMon").value;
  const type = document.getElementById("loai").value;
  const price = document.getElementById("giaMon").value;
  const promote = document.getElementById("khuyenMai").value;
  const status = document.getElementById("tinhTrang").value;
  console.log(status);
  let monAn = new MonAn(ID, name, type, price, promote, status);
  foodList.addFood(monAn);
  renderFoodList(foodList.arrFood);
});
