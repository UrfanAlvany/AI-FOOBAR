import React from 'react'
import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import TransformationsForm from "@/components/shared/TransformationsForm";

const AddTransformationTypePage = ({params: {type}}: SearchParamProps) => {
    // @ts-ignore
    const transformation = transformationTypes[type];
    return (
        <>
        <Header
            title={transformation.title}
            subtitle={transformation.subTitle}/>

    <TransformationsForm/>
        </>
    )
}
export default AddTransformationTypePage
