const DateTime = () => {
  const now = new Date();

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const dateTime = new Intl.DateTimeFormat("en-US", options)
    .format(now)
    .replace(/,/g, "");

  return (
    <div
      style={{
        fontSize: "13px",
        fontWeight: "500",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
        color: "white",
      }}
    >
      {dateTime}
    </div>
  );
};

export default DateTime;
