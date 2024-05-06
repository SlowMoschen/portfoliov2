import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from "react-vertical-timeline-component";
import Button from "../../common/components/Button";
import Chip from "../../common/components/Chip";

export interface ProjectElementProps extends VerticalTimelineElementProps {
  icon_src?: string;
  icon_initials?: string;
  title: string;
  description: string;
  img_src: string;
  buttonProps: {
    primary: {
      link: string;
      text: string;
    };
    secondary?: {
      link: string;
      text: string;
    };
  };
  chips?: string[];
}

export default function ProjectElement({
  icon_src,
  icon_initials,
  title,
  description,
  img_src,
  buttonProps,
  chips,
  ...props
}: ProjectElementProps) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const link = (e.target as HTMLButtonElement).dataset.link;
    if (link) window.open(link, "_blank");
  };

  const handleImgClick = () => {
    window.open(img_src, "_blank");
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      dateClassName="timeline-date"
      contentStyle={{
        background: "transparent",
        color: "var(--text)",
        border: "3px solid var(--primary)",
      }}
      contentArrowStyle={{ borderRight: "15px solid var(--primary)" }}
      icon={
        icon_src ? (
          <img src={icon_src} alt="" className="timeline-icon" />
        ) : (
          <div className="icon-initials">{icon_initials}</div>
        )
      }
      iconStyle={{
        background: "var(--background)",
        boxShadow: "0 0 0 4px var(--accent)",
      }}
      {...props}
    >
      <div className="project-main-content">
        <div className="chip-box">
          {chips && chips.map((chip, index) => <Chip key={index} text={chip} />)}
        </div>
        <h1 className="vertical-timeline-element-title">{title}</h1>
        <p>{description}</p>
        <img
          src={img_src}
          alt=""
          className="timeline-img"
          onClick={handleImgClick}
          style={{ cursor: "pointer" }}
        />
        <Button
          size="sm"
          variant="contained"
          styles="primary"
          data-link={buttonProps.primary.link}
          onClick={handleButtonClick}
          open_in_new
        >
          {buttonProps.primary.text}
        </Button>
        {buttonProps.secondary && (
          <Button
            size="sm"
            variant="contained"
            styles="secondary"
            data-link={buttonProps.secondary.link}
            onClick={handleButtonClick}
            open_in_new
          >
            {buttonProps.secondary.text}
          </Button>
        )}
      </div>
    </VerticalTimelineElement>
  );
}
