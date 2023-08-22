class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let result: ListNode = new ListNode(0)
	let ptr = result

	while (l1 !== null && l2 !== null) {
		if (l1.val < l2.val) {
			result.next = l1
			l1 = l1.next
		} else {
			result.next = l2
			l2 = l2.next
		}

		result = result.next
	}

	if(l1 === null) {
		result.next = l2
	} else if (l2 === null) {
		result.next = l1
	}

	return ptr.next
};


const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next = new ListNode(4)

console.log(mergeTwoLists(l1, l2))