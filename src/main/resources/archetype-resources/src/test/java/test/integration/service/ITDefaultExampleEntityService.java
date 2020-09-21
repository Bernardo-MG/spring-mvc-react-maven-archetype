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

package ${package}.test.integration.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.Iterables;

import ${package}.Application;
import ${package}.model.ExampleEntity;
import ${package}.service.ExampleEntityService;

/**
 * Integration tests for the {@link ExampleEntityService}.
 * <p>
 * As this service doesn't contain any actual business logic, and it just wraps
 * the example entities repository, these tests are for verifying everything is
 * set up correctly and working.
 */
@SpringJUnitConfig
@Transactional
@Rollback
@SpringBootTest(classes = Application.class)
public class ITDefaultExampleEntityService {

    /**
     * Service being tested.
     */
    @Autowired
    private ExampleEntityService service;

    /**
     * Default constructor.
     */
    public ITDefaultExampleEntityService() {
        super();
    }

    /**
     * Verifies that the service adds entities into persistence.
     */
    @Test
    public void testAdd_NotExisting_Added() {
        final Integer entitiesCount;       // Original number of entities
        final Integer finalEntitiesCount;  // Final number of entities

        entitiesCount = Iterables.size(service.getAllEntities());

        service.add("ABC");

        finalEntitiesCount = Iterables.size(service.getAllEntities());

        Assertions.assertEquals(finalEntitiesCount, new Integer(entitiesCount + 1));
    }

    /**
     * Verifies that the service adds entities into persistence.
     */
    @Test
    public void testAdd_NotExisting_ReturnsCreated() {
        final ExampleEntity entity;        // Created entity
        final String name;                 // Created entity name

        name = "newName";

        entity = service.add(name);

        Assertions.assertEquals(name, entity.getName());
    }

    /**
     * Verifies that searching an existing entity by id returns the expected
     * entity.
     */
    @Test
    public void testFindById_Existing_Valid() {
        final ExampleEntity entity; // Found entity

        entity = service.findById(1);

        Assertions.assertEquals(entity.getId(), new Integer(1));
    }

    /**
     * Verifies that searching for a not existing entity by id returns an empty
     * entity.
     */
    @Test
    public void testFindById_NotExisting_Invalid() {
        final ExampleEntity entity; // Found entity

        entity = service.findById(100);

        Assertions.assertEquals(entity.getId(), new Integer(-1));
    }

    /**
     * Verifies that searching by an incomplete name returns all the matching
     * entities.
     */
    @Test
    public void testFindByNameQuery_QueryPattern_ReturnsMatching() {
        final Iterable<? extends ExampleEntity> entities; // Found entities

        entities = service.findByNameQuery("entity_0", null);

        Assertions.assertEquals(9, Iterables.size(entities));
    }

}
