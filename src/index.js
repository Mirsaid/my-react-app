import ReactDOM from "react-dom"
import CardItems from "./CardItems"
import faker from "faker"
import Card from "./Card"

const App = () =>{
    // const fullname = faker.name.firstName()faker.name.secondName()
 return   (
    <div className="ui items">

<Card>
 <CardItems 
 avatar={faker.image.avatar()}
 header={faker.name.firstName()}
 description={faker.name.jobType()}

 />
 </Card>
<Card>
  <CardItems 
 avatar={faker.image.avatar()}
 header={faker.name.firstName()}
 description={faker.name.jobType()}

 />

</Card>

<Card>
  <CardItems 
 avatar={faker.image.avatar()}
 header={faker.name.firstName()}
 description={faker.name.jobType()}

 />
 </Card>
 </div>

 )
}

ReactDOM.render(<App />, document.querySelector("#root"))