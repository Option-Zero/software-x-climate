type Props = {
    members: string[];
};

export default function TeamMembers({ members }: Props) {
    if (!members || members.length === 0) {
        return (
            <div className="text-sm text-gray-600">
                <span className="font-medium">Team: </span>
                Anonymous
            </div>
        );
    }

    return (
        <div className="text-sm text-gray-600">
            <span className="font-medium">Team: </span>
            {members.join(', ')}
        </div>
    );
}
