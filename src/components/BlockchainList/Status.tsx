import { PostStatus, PostStatusText } from 'models/PostStatus'
import { StatusText } from 'components/ui/Text'
import { Suspense } from 'preact/compat'
import { useSnapshot } from 'valtio'
import ExternalLink from 'components/ui/ExternalLink'
import LoadingWithDots from 'components/ui/LoadingWithDots'
import classnames, { alignItems, display } from 'classnames/tailwind'
import postIdsStatuses from 'stores/PostIdsStatuses'

const statusContainer = classnames(display('flex'), alignItems('items-center'))

const statusColor = (status: PostStatus) => {
  switch (status) {
    case PostStatus.rejected:
    case PostStatus.failedToPost:
      return 'error'
    case PostStatus.published:
      return 'primary'
    default:
      return 'accent'
  }
}

export function StatusSuspended({ blockchainId }: { blockchainId: number }) {
  const { statuses } = useSnapshot(postIdsStatuses)
  const status = statuses[blockchainId]?.status
  const serviceId = statuses[blockchainId]?.serviceId

  const statusOrLoading = PostStatusText[status] || <LoadingWithDots />
  const farcasterCastUrl = `farcaster://casts/${serviceId}`

  return (
    <div className={statusContainer}>
      {status === PostStatus.published ? (
        <ExternalLink url={farcasterCastUrl}>
          <StatusText color={statusColor(status)}>{statusOrLoading}</StatusText>
        </ExternalLink>
      ) : (
        <StatusText color={statusColor(status)}>{statusOrLoading}</StatusText>
      )}
    </div>
  )
}

export default function ({ blockchainId }: { blockchainId: number }) {
  return (
    <Suspense
      fallback={
        <div className={statusContainer}>
          <StatusText color={statusColor(PostStatus.pending)}>
            <LoadingWithDots />
          </StatusText>
        </div>
      }
    >
      <StatusSuspended blockchainId={blockchainId} />
    </Suspense>
  )
}
