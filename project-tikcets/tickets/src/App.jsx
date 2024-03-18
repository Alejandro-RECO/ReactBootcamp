import { getTickets } from "./services/httpverbs"
import FormTickets from "./form";
import Tickets from "./tickets";

const App = () => {
  return (
    <section className="bg-gray-200/50 py-4 flex flex-col items-center justify-center">
     <FormTickets/>
     <Tickets/>
    </section>
  )
}

export default App

