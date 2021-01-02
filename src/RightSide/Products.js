import React from 'react'

const Products = ({ id, }) => {
    
    return (
        <div id={id} className="col-12 min-vh-100">
            <h1 className="text-center title p-2 bg-white rounded shadow">Products</h1>

            <div className="my-2">
                <h6 className="font-weight-bold pt-2">  &#8226; Product to cover all aspects of cleaning / maintaining operation, for customers managing it "in hose" and outsourcing companies</h6>
                <p className="my-1">Team size: 4</p>
                <p className="my-1">Responsibilities: Implement Message Feature</p>
                <p className="my-1">Technologies: React Native</p>
            </div>

            <div>
                <h6 className="font-weight-bold pt-2">  &#8226; Improving the experience of exploring remote areas by vehicle</h6>
                <p className="my-1">Team size: 1</p>
                <p className="my-1">Responsibilities: I'm core developer in this project. I handle almost all the features, UI, etc...</p>
                <p className="my-1">Technologies: React Native</p>
            </div>

        </div>
    )
}
export default Products