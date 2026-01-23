import Medical from "./Medical"
import Recruitment from "../OurExpertise/Recruitment"
import Services from "./Services"
import  Package from "./Package"
import Ticket  from "./Ticket"
import Attestation from "./Attestation"
import HowItWorks from "../HomeSection/Work"


const Expertise: React.FC = () => {
     return (
          <>
               <Medical />
               <Recruitment />
                <HowItWorks />
               <Services/>
               <Package/>
               <Ticket/>
               <Attestation/>
          </>
     )
}

export default Expertise