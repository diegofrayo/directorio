declare let window: any;

const ANALYTICS_PROPERTY_NAME = "directorio-ARMENIA";

export const ANALYTICS_TRACKING_ID = "UA-98284306-2";

export function trackEvent({ category, value }: Record<string, string>): void {
  console.log({
    hitType: "event",
    eventCategory: category,
    eventAction: "click",
    eventLabel: value,
  });

  window.ga(`${ANALYTICS_PROPERTY_NAME}.send`, {
    hitType: "event",
    eventCategory: category,
    eventAction: "click",
    eventLabel: value,
  });
}

export function trackLoadPage(): void {
  if (!window.ga) {
    window.ga = () => {
      console.log("GA not loaded");
    };
  }

  window.ga("create", ANALYTICS_TRACKING_ID, "auto", ANALYTICS_PROPERTY_NAME, {
    page: window.location.pathname,
    title: document.title,
  });

  window.ga(`${ANALYTICS_PROPERTY_NAME}.send`, "pageview");
}

export default {
  ANALYTICS_TRACKING_ID,
  trackEvent,
  trackLoadPage,
};
