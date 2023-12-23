'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/store/use-sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import UserAvatar from '@/components/user-avatar'

interface UserItemProps {
	username: string
	imageUrl: string
	isLive?: boolean
}
const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
	const pathName = usePathname()

	const { collapsed } = useSidebar(state => state)

	const href = `/${username}`
	const isActive = pathName === href

	return (
		<Button
			asChild
			variant='ghost'
			className={cn(
				'w-full h-12',
				collapsed ? 'justify-center' : 'justify-start',
				isActive && 'bg-accent'
			)}
		>
			<Link href={href}>
				<div
					className={cn(
						'flex items-center w-full gap-x-4',
						collapsed && 'justify-center'
					)}
				>
					<UserAvatar
						imageUrl={imageUrl}
						username={username}
						isLive={isLive}
						showBadge
					/>
				</div>
			</Link>
		</Button>
	)
}

export default UserItem