import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs, TbBrandTypescript, TbBrandTailwind, TbBrandJavascript, TbBrandPython } from "react-icons/tb"
import { SiRedux, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </div>
            <div className="p-4">
                <TbBrandTypescript className="text-7xl text-blue-500" />
            </div>
            <div className="p-4">
                <TbBrandJavascript className="text-7xl text-yellow-400" />
            </div>
            <div className="p-4">
                <TbBrandTailwind className="text-7xl text-cyan-500" />
            </div>
            <div className="p-4">
                <SiRedux className="text-7xl text-purple-500" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
                <SiNodedotjs className="text-7xl text-green-600" />
            </div>
            <div className="p-4">
                <SiExpress className="text-7xl" />
            </div>
            <div className="p-4">
                <TbBrandPython className="text-7xl text-yellow-500" />
            </div>
        </div>
    </div>
  )
}

export default Technologies