import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

interface Props {
  currentStage: number
}

interface RenderContent {
  [index: number]: JSX.Element
}

const InfoBox = ({
  text,
  link,
  btnText,
}: {
  text: string
  link: string
  btnText: string
}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" alt="--->" />
    </Link>
  </div>
)

const renderContent: RenderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi there I'm <span className="font-semibold">Felipe</span> 👋👋👋
      <br />A Software Engineer from Argentina 🇦🇷
    </h1>
  ),
  2: (
    <InfoBox
      text="With 10+ years of experience in development and a strong focus on React.js, Node.js, and TypeScript"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Demonstrated expertise in all aspects of the software development lifecycle and end-to-end project management. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
}

export const HomeInfo = ({ currentStage }: Props) => {
  return renderContent[currentStage] || null
}
