import { LinkedList } from "../linked-list";

describe("linkedList", () => {
  describe("when empty", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => (linkedList = new LinkedList()));

    it("should return an empty array", () =>
      expect(linkedList.asArray()).toEqual([]));

    it("should have a length of 0", () =>
      expect(linkedList.getLength()).toEqual(0));

    describe("when an element is pushed", () => {
      beforeEach(() => linkedList.push(10));

      it("should have a length of 1", () =>
        expect(linkedList.getLength()).toEqual(1));
      it("should add the element to the end of the list", () =>
        expect(linkedList.asArray()).toEqual([10]));
    });

    describe("when an element is popped", () => {
      let poppedValue: number;

      beforeEach(() => (poppedValue = linkedList.pop()));

      it("should return undefined", () => expect(poppedValue).toBeUndefined());
    });

    describe("when an element is unshifted", () => {
      beforeEach(() => linkedList.unshift(10));

      it("should return a length of 1", () =>
        expect(linkedList.getLength()).toEqual(1));

      it("should return the elements in the array in order", () =>
        expect(linkedList.asArray()).toEqual([10]));
    });

    describe("when an element is shifted", () => {
      let shiftedValue: number;

      beforeEach(() => (shiftedValue = linkedList.shift()));

      it("should return undefined", () => expect(shiftedValue).toBeUndefined());
    });

    describe("when get function is called", () => {
      let value: number;

      beforeEach(() => (value = linkedList.get(0)));

      it("should return undefined", () => expect(value).toBeUndefined());
    });

    describe("when set function is called", () => {
      let hasSet: boolean;

      beforeEach(() => (hasSet = linkedList.set(0, 10)));

      it("should return false", () => expect(hasSet).toBeFalsy());

      it("should return an empty array without setting the value", () =>
        expect(linkedList.asArray()).toEqual([]));
    });

    describe("when insert function is called", () => {
      let isInserted: boolean;

      beforeEach(() => (isInserted = linkedList.insert(0, 10)));

      it("should return true", () => expect(isInserted).toBeTruthy());

      it("should have a length of 1", () =>
        expect(linkedList.getLength()).toEqual(1));

      it("should return the array with the inserted element", () =>
        expect(linkedList.asArray()).toEqual([10]));
    });
  });

  describe("when one element is present", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => (linkedList = new LinkedList(10)));

    it("should have a length of 1", () =>
      expect(linkedList.getLength()).toEqual(1));

    it("should return the element in the array", () =>
      expect(linkedList.asArray()).toEqual([10]));

    describe("when an element is pushed", () => {
      beforeEach(() => linkedList.push(20));

      it("should have a length of 2", () =>
        expect(linkedList.getLength()).toEqual(2));

      it("should add the element to the end of the list", () =>
        expect(linkedList.asArray()).toEqual([10, 20]));
    });

    describe("when an element is popped", () => {
      let poppedValue: number;

      beforeEach(() => (poppedValue = linkedList.pop()));

      it("should return the popped value", () =>
        expect(poppedValue).toEqual(10));

      it("should have a length of 0", () =>
        expect(linkedList.getLength()).toEqual(0));

      it("should return an empty array", () =>
        expect(linkedList.asArray()).toEqual([]));
    });

    describe("when an element is shifted", () => {
      let shiftedValue: number;

      beforeEach(() => (shiftedValue = linkedList.shift()));

      it("should return the shifted value", () =>
        expect(shiftedValue).toEqual(10));

      it("should have a length of 0", () =>
        expect(linkedList.getLength()).toEqual(0));

      it("should return an empty array", () =>
        expect(linkedList.asArray()).toEqual([]));
    });

    describe("when an element is unshifted", () => {
      beforeEach(() => linkedList.unshift(1));

      it("should return a length of 2", () =>
        expect(linkedList.getLength()).toEqual(2));

      it("should return the array with all the elements", () =>
        expect(linkedList.asArray()).toEqual([1, 10]));
    });

    describe("when get function is called", () => {
      let value: number;

      beforeEach(() => (value = linkedList.get(0)));

      it("should return the value at the index", () =>
        expect(value).toEqual(10));
    });

    describe("when set function is called", () => {
      let hasSet: boolean;

      beforeEach(() => (hasSet = linkedList.set(0, 20)));

      it("should return true", () => expect(hasSet).toBeTruthy());

      it("should return an empty array with the updated value", () =>
        expect(linkedList.asArray()).toEqual([20]));
    });

    describe("when insert function is called", () => {
      let isInserted: boolean;

      describe("and an element is inserted into the 0th index", () => {
        beforeEach(() => (isInserted = linkedList.insert(0, 1)));

        it("should return true", () => expect(isInserted).toBeTruthy());

        it("should have a length of 2", () =>
          expect(linkedList.getLength()).toEqual(2));

        it("should return the array with the inserted element", () =>
          expect(linkedList.asArray()).toEqual([1, 10]));
      });

      describe("and the element is inserted into the 1st index", () => {
        beforeEach(() => (isInserted = linkedList.insert(1, 20)));

        it("should return true", () => expect(isInserted).toBeTruthy());

        it("should have a length of 2", () =>
          expect(linkedList.getLength()).toEqual(2));

        it("should return the array with the inserted element", () =>
          expect(linkedList.asArray()).toEqual([10, 20]));
      });
    });
  });

  describe("when more than 1 element is present", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => {
      linkedList = new LinkedList(10);
      linkedList.push(20);
      linkedList.push(30);
      linkedList.push(40);
      linkedList.push(50);
    });

    it("should have a length of 5", () =>
      expect(linkedList.getLength()).toEqual(5));

    it("should return an array with all the elements in order", () =>
      expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]));

    describe("when an element is pushed", () => {
      beforeEach(() => linkedList.push(60));

      it("should return the length of 6", () =>
        expect(linkedList.getLength()).toEqual(6));

      it("should return the array with all the elements in order", () =>
        expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50, 60]));
    });

    describe("when an element is popped", () => {
      let poppedValue: number;

      beforeEach(() => (poppedValue = linkedList.pop()));

      it("should return the popped value", () =>
        expect(poppedValue).toEqual(50));

      it("should have a length of 4", () =>
        expect(linkedList.getLength()).toEqual(4));

      it("should return all the element in the array in order", () =>
        expect(linkedList.asArray()).toEqual([10, 20, 30, 40]));

      describe("when there are only two elements in the list", () => {
        beforeEach(() => {
          linkedList = new LinkedList(10);
          linkedList.push(20);

          poppedValue = linkedList.pop();
        });

        it("should have a length of 1", () =>
          expect(linkedList.getLength()).toEqual(1));

        it("should return all the element in the array in order", () =>
          expect(linkedList.asArray()).toEqual([10]));
      });
    });

    describe("when an element is unshifted", () => {
      beforeEach(() => linkedList.unshift(1));

      it("should return a length of 6", () =>
        expect(linkedList.getLength()).toEqual(6));

      it("should return the array with all the elements in order", () =>
        expect(linkedList.asArray()).toEqual([1, 10, 20, 30, 40, 50]));
    });

    describe("when an element is shifted", () => {
      let shiftedValue: number;

      beforeEach(() => (shiftedValue = linkedList.shift()));

      it("should return the shifted value", () =>
        expect(shiftedValue).toEqual(10));

      it("should have a length of 4", () =>
        expect(linkedList.getLength()).toEqual(4));

      it("should return the elements in the array in order", () =>
        expect(linkedList.asArray()).toEqual([20, 30, 40, 50]));
    });

    describe("when get function is called", () => {
      let value: number;

      describe("with index less than 0", () => {
        beforeEach(() => (value = linkedList.get(-1)));

        it("should return undefined", () => expect(value).toBeUndefined());
      });

      describe("with index greater than the total length of the list", () => {
        beforeEach(() => (value = linkedList.get(5)));

        it("should return undefined", () => expect(value).toBeUndefined());
      });

      describe("with index within the length of the list", () => {
        beforeEach(() => (value = linkedList.get(3)));

        it("should return the value at the index", () =>
          expect(value).toEqual(40));
      });
    });

    describe("when set function is called", () => {
      let hasSet: boolean;

      describe("with index less than 0", () => {
        beforeEach(() => (hasSet = linkedList.set(-1, -10)));

        it("should return false", () => expect(hasSet).toBeFalsy());

        it("should return the array with existing values", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]));
      });

      describe("with index greater than the list's length", () => {
        beforeEach(() => (hasSet = linkedList.set(5, 60)));

        it("should return false", () => expect(hasSet).toBeFalsy());

        it("should return the array with existing values", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]));
      });

      describe("with the index within the list", () => {
        beforeEach(() => (hasSet = linkedList.set(2, 100)));

        it("should return true", () => expect(hasSet).toBeTruthy());

        it("should return the array with the updated values", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 100, 40, 50]));
      });
    });

    describe("when insert function is called", () => {
      let isInserted: boolean;

      describe("with index less than 0", () => {
        beforeEach(() => (isInserted = linkedList.insert(-1, 1)));

        it("should return false", () => expect(isInserted).toBeFalsy());

        it("should retain the existing length", () =>
          expect(linkedList.getLength()).toEqual(5));

        it("should return the array with existing values", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]));
      });

      describe("with index is 1 greater than the list's length", () => {
        beforeEach(() => (isInserted = linkedList.insert(6, 1)));

        it("should return false", () => expect(isInserted).toBeFalsy());

        it("should retain the existing length", () =>
          expect(linkedList.getLength()).toEqual(5));

        it("should return the array with existing values", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]));
      });

      describe("with index 0", () => {
        beforeEach(() => (isInserted = linkedList.insert(0, 1)));

        it("should return true", () => expect(isInserted).toBeTruthy());

        it("should return length of 6", () =>
          expect(linkedList.getLength()).toEqual(6));

        it("should return the array with the values in order", () =>
          expect(linkedList.asArray()).toEqual([1, 10, 20, 30, 40, 50]));
      });

      describe("with index equal to the list's length", () => {
        beforeEach(() => (isInserted = linkedList.insert(5, 60)));

        it("should return true", () => expect(isInserted).toBeTruthy());

        it("should return length of 6", () =>
          expect(linkedList.getLength()).toEqual(6));

        it("should return the array with the values in order", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50, 60]));
      });

      describe("with index that inserts an element at the current last element", () => {
        beforeEach(() => (isInserted = linkedList.insert(4, 45)));

        it("should return true", () => expect(isInserted).toBeTruthy());

        it("should return length of 6", () =>
          expect(linkedList.getLength()).toEqual(6));

        it("should return the array with the values in order", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 45, 50]));
      });

      describe("with an index within the list's length", () => {
        beforeEach(() => (isInserted = linkedList.insert(2, 25)));

        it("should return true", () => expect(isInserted).toBeTruthy());

        it("should return length of 6", () =>
          expect(linkedList.getLength()).toEqual(6));

        it("should return the array with the values in order", () =>
          expect(linkedList.asArray()).toEqual([10, 20, 25, 30, 40, 50]));
      });
    });
  });
});
