import React from 'react'

const Testimonials: React.FC = () => {

const testimonials = [
    {
        customerName: "Vasil Todorov",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
        rating: "5/5"
    },
    {
        customerName: "Ivan Kitanov",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
        rating: "4/5"
    },
    {
        customerName: "Alexander Topalov",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
        rating: "5/5"
    },
]


  return (
    
    <section className='max-w-7xl mx-auto py-16 px-4 flex flex-col'>
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-lg text-muted-foreground">
          What our customers say about us
        </p>
      </div>
      <div className='flex items-center justify-center'>
        {testimonials.map((client, index) => (
            <div className='p-6 flex flex-col justify-center items-center gap-4' key={index}>
                <h1 className='text-white text-2xl font-bold'>{client.customerName}</h1>
                <p className='text-muted-foreground font-base font-light text-center'>{client.review}</p>
                <span className='text-white font-lg'>{client.rating}</span>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
