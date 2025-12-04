// src/components/Booking.jsx
import Stepper from "./Stepper";
import YourDetails from "./YourDetails";
import DateSelection from "./DateSelection";
import Guests from "./Guests";
import { useState } from "react";
import TravelAssistance from "./TravelAssistance";
import Confirmation from "./Confirmation";





export default function Booking() {
  const token=localStorage.getItem('token')
  const THEME = "#304766";
  const TICK_IMG = "https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png";

  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    start: "",
    end: "",
    startDate: "",
    endDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    assistance: false,
    assistanceType: "",
  });





  
  // Generic input handler (inputs, selects, checkboxes)
  
  const handleChange = async(e) => {
    //@ts-ignore
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setErrors((p) => ({ ...p, [name]: "" }));

   
  };

  // Guests updater
  //@ts-ignore
  const updateGuests = (field, delta) => {
    setFormData((p) => {
      let next = p[field] + delta;
      if (field === "adults") next = Math.max(1, next);
      else next = Math.max(0, next);
      return { ...p, [field]: next };
    });
  };

  // Validate all requirements needed to reach `targetStep`
  
  const validateForTarget = (targetStep) => {
    const newErrors = {};
    if (targetStep > 1) {
      
      if (!formData.name.trim()) newErrors.name = "Enter your name";
      if (!formData.start.trim()) newErrors.start = "Enter your start location";
      if (!formData.end.trim()) newErrors.end = "Enter your end location";
    }
    if (targetStep > 2) {
      if (!formData.startDate) newErrors.startDate = "Select start date";
      if (!formData.endDate) newErrors.endDate = "Select end date";
      if (formData.startDate && formData.endDate) {
        const s = new Date(formData.startDate);
        const e = new Date(formData.endDate);
        if (e < s) newErrors.endDate = "The end date cannot be less than the start date";
      }
    }
    return newErrors;
  };

  // Navigation handlers
  const goNext = () => {
    const v = validateForTarget(step + 1);
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const handleStepClick = (target) => {
    if (target <= step) {
      // allow backward navigation freely
      setErrors({});
      setStep(target);
      return;
    }
    // forward navigation needs validation
    const v = validateForTarget(target);
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStep(target);
  };

  const handleConfirm = async(e:React.FormEvent) => {
    e.preventDefault()
    const {name,
      start,
      end,
      startDate,
      endDate,
      adults,
      children,
      infants,
      assistance,
      assistanceType}=formData
    const res= await fetch(`${process.env.url}/api/user/newTrip`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({name,end,startDate,start,endDate,adults,children,infants,assistance,assistanceType})
    })
    
    const data=await res.json()
    console.log(data)
    if(res.ok){
      setConfirmed(true)
      alert("Successfully Added")
    }
    else{
      alert("Error")
      console.log(Error)
    }

  };

  const handleCancel = () => {
    setFormData({
      name: "",
      start: "",
      end: "",
      startDate: "",
      endDate: "",
      adults: 1,
      children: 0,
      infants: 0,
      assistance: false,
      assistanceType: "",
    });
    setErrors({});
    setStep(1);
    setConfirmed(false);
  };

  return (
    <div className="min-h-screen bg-[#dbeafe] flex items-center justify-center p-8">
      {/* Outer rounded box without colored border */}
      <div
        className="w-full max-w-7xl rounded-2xl flex overflow-hidden booking-card-shadow"
        style={{
          height: "78vh",
          minHeight: 560,
        }}
      >
        {/* Left Sidebar */}
        <div className="w-80 bg-white flex-shrink-0 p-8">
          <Stepper step={step} onStepClick={handleStepClick} tickImg={TICK_IMG} />
        </div>

        {/* Right dark area */}
        <div className="flex-1 bg-[#304766] p-12 flex items-center justify-center">
          {/* Inner white form card centered */}
          <div
            className="bg-white rounded-xl shadow-lg p-10 flex flex-col"
            style={{
              width: 720,
              maxWidth: "calc(100% - 48px)",
              minHeight: 460,
              borderRadius: 16,
            }}
          >
            {!confirmed ? (
              <>
                {step === 1 && (
                  <YourDetails
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    onNext={goNext}
                    theme={THEME}
                  />
                )}
                {step === 2 && (
                  <DateSelection
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    onNext={goNext}
                    onBack={goBack}
                    theme={THEME}
                  />
                )}
                {step === 3 && (
                  <Guests
                    formData={formData}
                    onInc={(k) => updateGuests(k, 1)}
                    onDec={(k) => updateGuests(k, -1)}
                    onNext={goNext}
                    onBack={goBack}
                    theme={THEME}
                  />
                )}
                {step === 4 && (
                  <TravelAssistance
                    formData={formData}
                    onChange={handleChange}
                    onNext={goNext}
                    onBack={goBack}
                    theme={THEME}
                  />
                )}
                {step === 5 && (
                  <Confirmation
                    formData={formData}
                    onBack={goBack}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                    theme={THEME}
                    tickImg={TICK_IMG}
                  />
                )}
              </>
            ) : (
              <div className="text-center mt-6">
                <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-4">
                  {/* success tick image - larger and centered */}
                  <img src={TICK_IMG} alt="success" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-caveat text-2xl text-[#304766] mb-2">Awesome!</h3>
                <p className="text-[#334155] mb-6">Your booking has been confirmed.</p>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 rounded-md text-white"
                  style={{ backgroundColor: THEME }}
                >
                  Book a New Trip
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}