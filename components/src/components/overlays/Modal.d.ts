import * as React from 'react';
/** Bottom sheet over a dimmed backdrop: grabber, optional close button, a title block, free content and actions. Fills the screen width. */
export interface ModalProps {
  className?: string;
  /** Applied to the sheet (the role="dialog" element). */
  style?: React.CSSProperties;
  /** Shown while true; nothing renders when false. Default true so a static preview renders; in app code drive it from state. */
  open?: boolean;
  /** Called when the person asks to close, with the reason: "backdrop" (tap on the dimmed area) and "escape" only when dismissible, "close" from the close button. Set open to false here. */
  onClose?: (reason: "backdrop" | "escape" | "close") => void;
  /** Sheet title, Title3 emphasized 20/25. Names the dialog (aria-labelledby). Sentence case, a question for a confirmation. */
  title?: React.ReactNode;
  /** Text under the title, Subheadline 15/20 in content-secondary. Describes the dialog (aria-describedby). */
  description?: React.ReactNode;
  /** Picture above the title (Figma: a 64 or 80px service illustration). Decorative: hidden from screen readers. */
  illustration?: React.ReactNode;
  /** Content between the title block and the actions (data rows, selections, a form). Taller content scrolls inside the sheet. */
  children?: React.ReactNode;
  /** Action buttons, stacked with a 12px gap, the primary one first. <Button>s stretch to the sheet width unless they set fullWidth. */
  actions?: React.ReactNode;
  /** Figma "close button=true": a 44×44 Liquid Glass close button at the top left; the gaps between parts drop from 24 to 12. */
  showClose?: boolean;
  /** Accessible name of the close button. Default "Закрити". */
  closeLabel?: string;
  /** When true (default), a tap on the backdrop and the Escape key call onClose. Set false when the person must pick an action. */
  dismissible?: boolean;
  /** role="alertdialog" instead of "dialog", for a confirmation that interrupts the task (sign, pay, delete). */
  alert?: boolean;
  /** auto: as tall as the content, up to 62px below the top of the screen; full: always that tall (Figma "fullscreen"), content scrolls. */
  size?: "auto" | "full";
  /** Static rendering for previews and docs: fills the nearest positioned ancestor (position: absolute) instead of the viewport, does not move or trap focus, no Escape, no scroll lock, no aria-modal. Live screens leave it false. */
  inline?: boolean;
  /** Name of the dialog when there is no title. */
  'aria-label'?: string;
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
