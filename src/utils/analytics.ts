import { isDevelopmentEnvironment } from "./utils";

declare let window: any;

const ANALYTICS_PROPERTY_NAME = "directorioARMENIA";
const ANALYTICS_TRACKING_ID = "UA-98284306-2";

export function initAnalytics(): void {
  if (
    !window.ga ||
    window.location.href.includes("noga=true") ||
    isDevelopmentEnvironment()
  ) {
    window.ga = () => {
      console.log("GA disabled");
    };
  } else {
    console.log("GA enabled");
  }

  window.ga("create", ANALYTICS_TRACKING_ID, "auto", ANALYTICS_PROPERTY_NAME);
  window.ga("set", "appName", ANALYTICS_PROPERTY_NAME);
}

export function trackPageLoaded(): void {
  console.group("trackPageLoaded");
  console.info({
    hitType: "pageview",
    page: window.location.pathname,
    title: document.title,
  });
  console.groupEnd();

  window.ga(`${ANALYTICS_PROPERTY_NAME}.send`, {
    hitType: "pageview",
    page: window.location.pathname,
    title: document.title,
  });
}

export function trackEvent({ category, label }: Record<string, string>): void {
  console.group("trackEvent");
  console.info({
    hitType: "event",
    eventAction: "click",
    eventCategory: category,
    eventLabel: label,
  });
  console.groupEnd();

  window.ga(`${ANALYTICS_PROPERTY_NAME}.send`, {
    hitType: "event",
    eventAction: "click",
    eventCategory: category,
    eventLabel: label,
  });
}

export default {
  initAnalytics,
  trackEvent,
  trackPageLoaded,
};
