import { url } from "inspector"

export const GA_TRACKING_ID = "G-HQ2Q257747"

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

type GATagEvent = {
  action: string,
  category: string,
  label: string,
  value: number,
}

export const event = ({ action, category, label, value }: GATagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}