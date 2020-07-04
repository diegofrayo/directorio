import ReactGA from "react-ga";
import { isDevelopmentEnvironment } from "./utils";

declare let window: any;

const ANALYTICS_PROPERTY_NAME = "directorioARMENIA";
const ANALYTICS_TRACKING_ID = "UA-98284306-2";

export function initAnalytics(): void {
  const isAnalyticsDisabled =
    window.location.href.includes("noga=true") || isDevelopmentEnvironment();

  ReactGA.initialize(ANALYTICS_TRACKING_ID, {
    testMode: isAnalyticsDisabled,
  });
  ReactGA.set({ appName: ANALYTICS_PROPERTY_NAME });
}

export function trackPageLoaded(): void {
  console.group("trackPageLoaded");
  console.info({
    hitType: "pageview",
    page: window.location.pathname,
    title: document.title,
  });
  console.groupEnd();

  ReactGA.pageview(window.location.pathname, [], document.title);
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

  ReactGA.event({
    label,
    category,
    action: "click",
  });
}

export function trackModal(modalName: string): void {
  console.group("trackModal");
  console.info({ modalName });
  console.groupEnd();

  ReactGA.modalview(`${window.location.pathname}/${modalName}`.replace("//", "/"));
}

export function setDimension(index: number, name: string): void {
  ReactGA.set({ [`dimension${index}`]: name });
}

export default {
  initAnalytics,
  trackEvent,
  trackPageLoaded,
  trackModal,
  setDimension,
};
