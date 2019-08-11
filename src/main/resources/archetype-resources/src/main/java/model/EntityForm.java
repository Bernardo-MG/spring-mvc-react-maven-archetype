/**
 * The MIT License (MIT)
 * <p>
 * Copyright (c) ${currentYear} the original author or authors.
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package ${package}.model;

import static com.google.common.base.Preconditions.checkNotNull;

import java.io.Serializable;
import java.util.Objects;

import com.google.common.base.MoreObjects;

/**
 * Default implementation of the example entity.
 * <p>
 * TODO: Rename to EntityForm
 *
 * @author Bernardo Mart&iacute;nez Garrido
 */
public class EntityForm implements Serializable {

    /**
     * Serialization ID.
     */
    private static final long serialVersionUID = 1328776989450853491L;

    /**
     * Entity's ID.
     */
    private Integer           id               = -1;

    /**
     * Name of the entity.
     * <p>
     * This is to have additional data apart from the id, to be used on the
     * tests.
     */
    private String            name             = "";

    /**
     * Constructs an example entity.
     */
    public EntityForm() {
        super();
    }

    @Override
    public final boolean equals(final Object obj) {
        if (this == obj) {
            return true;
        }

        if (obj == null) {
            return false;
        }

        if (getClass() != obj.getClass()) {
            return false;
        }

        final EntityForm other = (EntityForm) obj;
        return Objects.equals(id, other.id);
    }

    /**
     * Returns the identifier assigned to this entity.
     * <p>
     * If no identifier has been assigned yet, then the value will be lower than
     * zero.
     *
     * @return the entity's identifier
     */
    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public final int hashCode() {
        return Objects.hash(id);
    }

    public void setId(final Integer value) {
        id = checkNotNull(value, "Received a null pointer as identifier");
    }

    public void setName(final String value) {
        name = checkNotNull(value, "Received a null pointer as name");
    }

    @Override
    public final String toString() {
        return MoreObjects.toStringHelper(this).add("id", id).add("name", name)
                .toString();
    }

}
