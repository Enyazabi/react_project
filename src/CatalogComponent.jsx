import React from "react";
import CardComponent from "./CardComponent.jsx";

const CatalogComponent = () => (
        <div>
            {[  <CardComponent/>,
                <CardComponent/>,
                <CardComponent/>,
                <CardComponent/>,
                <CardComponent/>,
                <CardComponent/>
            ].map(item => <li key={item}>{item}</li>)}
        </div>
    );

export default CatalogComponent;