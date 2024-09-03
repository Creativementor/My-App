


function Testimonials({ testimonials }) {

    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                    Testimonials
                </h1>
                <div className="flex flex-wrap -m-4">

                    {
                        testimonials.map((data) => (<div key={data.id} className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                {data.icon}
                                <p className="leading-relaxed mb-6">
                                    {data.feedback}
                                </p>
                                <a className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={data.avatar}
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">
                                            {data.name}
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>))
                    }

                </div>
            </div>
        </section>



    );

}

export default Testimonials;