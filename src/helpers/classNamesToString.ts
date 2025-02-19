import { TTailwindString } from 'classnames/tailwind'

type AllowedExtraClassnames =
  | 'hover-tertiary'
  | 'hover-secondary'
  | 'loading-pause'
  | 'dots-loading'
  | 'break-words'
  | 'animated-blur'
  | 'animated-border'
  | 'hover-button-scroll'

export default function (
  ...classNames: (AllowedExtraClassnames | TTailwindString | undefined | null)[]
): string {
  return classNames.filter((s) => !!s).join(' ')
}
