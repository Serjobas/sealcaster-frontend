import { AccentText, SubHeaderText } from 'components/ui/Text'
import { Link, useLocation } from 'wouter'
import { Suspense } from 'preact/compat'
import { parseErrorText } from '@big-whale-labs/frontend-utils'
import { useSnapshot } from 'valtio'
import { useState } from 'preact/hooks'
import BurnerStatus from 'components/Landing/BurnerStatus'
import BurnerWalletStore from 'stores/BurnerWalletStore'
import Button from 'components/ui/Button'
import ConnectAndCreateButton from 'components/Landing/ConnectAndCreateButton'
import Dots from 'icons/Dots'
import ErrorMessage from 'components/ui/ErrorMessage'
import GradientBorder from 'components/ui/GradientBorder'
import Loading from 'icons/Loading'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  space,
  textAlign,
  width,
} from 'classnames/tailwind'
import useBadgeAccount from 'hooks/useBadgeAccount'
import walletStore from 'stores/WalletStore'

const wrapper = classnames(
  space('space-y-6'),
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center')
)

const buttonWrapper = classnames(
  display('flex'),
  justifyContent('justify-center')
)

const buttonWithStatus = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  textAlign('text-center'),
  gap('gap-y-4')
)

const buttonClass = classnames(display('block'), width('w-full', 'sm:w-80'))

function BurnerBlockSuspended() {
  const { account, isBurner, hasFarcasterBadge } = useBadgeAccount()
  const [location, setLocation] = useLocation()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { burnerLoading, status } = useSnapshot(BurnerWalletStore)

  return (
    <>
      <BurnerStatus loading={loading || burnerLoading} />
      {(!account || !hasFarcasterBadge || loading || burnerLoading) && (
        <div className={buttonWithStatus}>
          <div className={buttonClass}>
            <ConnectAndCreateButton
              loading={loading || burnerLoading}
              onError={setError}
              onLoading={setLoading}
              account={account}
            />
          </div>
          {error && (
            <ErrorMessage withExclamation text={parseErrorText(error)} />
          )}
          {status && (
            <AccentText small color="text-tertiary">
              {status}
            </AccentText>
          )}
        </div>
      )}
      {!loading && !burnerLoading && (
        <>
          {(!account || isBurner) && <Dots />}
          {account ? (
            hasFarcasterBadge && (
              <Link href="/cast">
                <div className={buttonWrapper}>
                  <GradientBorder>
                    <Button gradientFont type="secondary" small>
                      Create cast
                    </Button>
                  </GradientBorder>
                </div>
              </Link>
            )
          ) : (
            <div className={space('space-y-4')}>
              <SubHeaderText small>Already have a burner?</SubHeaderText>
              <div className={buttonWrapper}>
                <GradientBorder>
                  <Button
                    gradientFont
                    type="secondary"
                    small
                    onClick={async () => {
                      await walletStore.connect(true)
                      if (
                        (await walletStore.hasFarcasterBadge) &&
                        location !== '/cast'
                      )
                        setLocation('/cast')
                    }}
                  >
                    Connect burner
                  </Button>
                </GradientBorder>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default function () {
  return (
    <div className={wrapper}>
      <Suspense fallback={<Loading />}>
        <BurnerBlockSuspended />
      </Suspense>
    </div>
  )
}
