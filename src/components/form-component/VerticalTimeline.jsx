import { Timeline, Events, Event } from "vertical-timeline-component-react";

const VerticalTimeline = () => {
  const customTheme = {
    borderDotColor: "#ffffff",
    descriptionColor: "#262626",
    dotColor: "#d0cdc4",
    eventColor: "#965500",
    lineColor: "#d0cdc4",
    subtitleColor: "#899499",
    titleColor: "#36454F",
    yearColor: "#405b73",
  };

  return (
    <div className="timeline">
      <Timeline
        lang="en"
        theme={customTheme}
        dateFormat="only-number"
        collapse
        withoutDay
      >
        <Events
          title="Our Company Starts its operations"
          subtitle="Active now"
          startDate="2020/12/02"
          active
          defaultClosed
        >
          <Event
            title="Lorem Ipsum"
            description={[
              "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
              "Is simply dummy text of the printing and typesetting industry.",
            ]}
          />
        </Events>
        <Events
          title="First Customer"
          subtitle="Sept 25, 9:05 AM"
          startDate="2020/12/02"
          active
          defaultClosed
        >
          <Event
            title="Lorem Ipsum"
            description={[
              "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
              "Is simply dummy text of the printing and typesetting industry.",
            ]}
          />
        </Events>
        <Events
          title="Our team exceeds 10 people"
          subtitle="Jul 09, 2:30 AM"
          startDate="2020/12/02"
          active
          defaultClosed
        >
          <Event
            title="Lorem Ipsum"
            description={[
              "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
              "Is simply dummy text of the printing and typesetting industry.",
            ]}
          />
        </Events>
        <Events
          title="Earned the first million $!"
          subtitle="Jan 30, 3:56 AM"
          startDate="2020/12/02"
          active
          defaultClosed
        >
          <Event
            title="Lorem Ipsum"
            description={[
              "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
              "Is simply dummy text of the printing and typesetting industry.",
            ]}
          />
        </Events>
      </Timeline>
    </div>
  );
};

export default VerticalTimeline;
